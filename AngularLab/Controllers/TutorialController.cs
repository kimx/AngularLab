using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class TutorialController : Controller
    {
        // GET: Tutorial
        public ActionResult Templates()
        {
            return View();
        }
        public ActionResult Filtering()
        {
            return View();
        }
        public ActionResult DataBinding()
        {
            return View();
        }
        public ActionResult DependencyInjection()
        {
            return View();
        }

        public ActionResult TemplatingLinksImages()
        {
            return View();
        }

        public ActionResult Location()
        {
            return View();
        }

        public ActionResult RoutingMultipleIndex()
        {
            return View();
        }
        public ActionResult RoutingMultipleTabMain()
        {
            return PartialView();
        }

        public ActionResult RoutingMultipleTabDetail()
        {
            return PartialView();
        }

    }
}