using AngularLab.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData.Builder;

using System.Web.Http.OData.Extensions;
namespace AngularLab
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //oData
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<CategoryEntity>("CategoryEntities");
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
         

            // Web API 路由
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
