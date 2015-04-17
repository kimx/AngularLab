using AngularLab.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class GridLabController : Controller
    {
        // GET: GridLab
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult QueryProducts()
        {
            var data = ProductEntity.GetDatas();
            return Json(new { data }, JsonRequestBehavior.AllowGet);
        }
    }
}