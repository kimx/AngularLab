﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularLab.Controllers
{
    public class ServiceController : Controller
    {
        // GET: Service
        public ActionResult Provider()
        {
            return View();
        }
    }
}