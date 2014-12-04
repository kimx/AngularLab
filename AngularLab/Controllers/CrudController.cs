using AngularLab.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class CrudController : Controller
    {
        private static DbContextMock db = new DbContextMock();

        // GET: Crud
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCategorys()
        {
            var model = db.Category.ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }




}