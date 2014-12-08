using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class HttpBasicController : Controller
    {
        // GET: HttpBasic
        public ActionResult Resource()
        {
            return View();
        }
    }
}