using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class FileUploadController : Controller
    {
        // GET: FileUpload
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// resumeChunkSize
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult UploadFile(AttachFileModel model)
        {
            //System.Threading.Thread.Sleep(1000);
            var dir = Server.MapPath("~/Upload/Result");//檔案上傳目錄
            dir = Path.Combine(dir, model.Guid);//臨時儲存分塊的目錄
            if (!System.IO.Directory.Exists(dir))
                System.IO.Directory.CreateDirectory(dir);
            string filePath = Path.Combine(dir, model.File.FileName);
            model.File.SaveAs(filePath);

            return Json(new { Success = true, isLastUpload = true, margeFileName = model.File.FileName });
        }

        /// <summary>
        /// resumeChunkSize
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult UploadSplitFile(AttachFileModel model)
        {
            //System.Threading.Thread.Sleep(1000);
            var dir = Server.MapPath("~/Upload");//檔案上傳目錄
            dir = Path.Combine(dir, model.Guid);//臨時儲存分塊的目錄
            if (!System.IO.Directory.Exists(dir))
                System.IO.Directory.CreateDirectory(dir);
            string fileName = $"{model._chunkNumber}##{model._currentChunkSize}##{Path.GetExtension(model.File.FileName)}";
            string filePath = Path.Combine(dir, fileName);
            model.File.SaveAs(filePath);
            bool isLastUpload = IsLastUpload(model, dir);
            if (isLastUpload)
            {
                string margeFileName = MergeFile(model, dir);
                return Json(new { Success = true, isLastUpload, margeFileName });
            }
            return Json(new { Success = true });
        }

        private bool IsLastUpload(AttachFileModel model, string dir)
        {
            var files = System.IO.Directory.GetFiles(dir);//獲得下麵的所有檔案
            int uploadedTotal = 0;
            foreach (var part in files)
            {
                var pars = part.Split(new string[] { "##" }, StringSplitOptions.RemoveEmptyEntries);
                uploadedTotal += Convert.ToInt32(pars[1]);
            }
            bool result = uploadedTotal >= model._totalSize;
            return result;
        }

        //http://www.ipshop.xyz/11040.html
        public string MergeFile(AttachFileModel model, string dir)
        {
            var files = Directory.GetFiles(dir).OrderBy(x => Convert.ToInt32(Path.GetFileName(x).Split(new string[] { "##" }, StringSplitOptions.RemoveEmptyEntries)[0])).ToList();//排序檔案
            var finalPath = Path.Combine(Server.MapPath("~/Upload/Result"), model.File.FileName);//最終的檔案位置
            using (var fs = new FileStream(finalPath, FileMode.Create))
            {
                foreach (var part in files)//排一下序，保證從0-N Write
                {
                    var bytes = System.IO.File.ReadAllBytes(part);
                    fs.Write(bytes, 0, bytes.Length);
                    bytes = null;
                }
            }
            Directory.Delete(dir, true);//刪除檔案夾
            return model.File.FileName;
        }
    }



    public class AttachFileModel
    {
        public HttpPostedFileBase File { get; set; }

        public string Guid { get; set; }

        public int _chunkNumber { get; set; }
        public int _currentChunkSize { get; set; }
        public int _totalSize { get; set; }


    }
}