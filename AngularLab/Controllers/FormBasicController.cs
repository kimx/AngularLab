using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class FormBasicController : Controller
    {
        // GET: FormBasic
        public ActionResult Validation()
        {
            return View();
        }

        public ActionResult DropdownList()
        {
            return View();
        }

        public ActionResult DatePicker()
        {
            return View();
        }

        public ActionResult DateEraseTest()
        {
            return View();
        }
    }
}