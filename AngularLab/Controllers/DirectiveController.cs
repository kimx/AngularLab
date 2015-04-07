using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class DirectiveController : Controller
    {
        // GET: Directive
        public ActionResult PassParas()
        {
            return View();
        }

        public ActionResult AsyncValidator()
        {
            return View();
        }

        public ActionResult CheckUniqueValue(string value)
        {
            return Json(new { result = value == "kim", name = "Name-" + DateTime.Now }, JsonRequestBehavior.AllowGet);
        }
    }
}