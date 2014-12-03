using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class DeveloperController : Controller
    {
        // GET: Developer
        public ActionResult Directive()
        {
            return View();
        }

        public ActionResult StateProviderBasic()
        {
            return View();
        }
    }
}