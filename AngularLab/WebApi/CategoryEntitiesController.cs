using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Http.OData.Routing;
using AngularLab.Models;
using Microsoft.Data.OData;
using AngularLab.Service;

namespace AngularLab.WebApi
{
    /*
    WebApiConfig 類別可能需要其他變更以新增此控制器的路由，請將這些陳述式合併到 WebApiConfig 類別的 Register 方法。注意 OData URL 有區分大小寫。

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AngularLab.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<CategoryEntity>("CategoryEntities");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    [EnableQuery(AllowedQueryOptions = AllowedQueryOptions.Skip |
                               AllowedQueryOptions.Top|AllowedQueryOptions.Filter, PageSize = 10)]
    public class CategoryEntitiesController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();
        private static DbContextMock db = new DbContextMock();
        // GET: odata/CategoryEntities
        public IHttpActionResult GetCategoryEntities(ODataQueryOptions<CategoryEntity> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok<IEnumerable<CategoryEntity>>(db.Category);

            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/CategoryEntities(5)
        public IHttpActionResult GetCategoryEntity([FromODataUri] int key, ODataQueryOptions<CategoryEntity> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            // return Ok<CategoryEntity>(categoryEntity);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/CategoryEntities(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<CategoryEntity> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(categoryEntity);

            // TODO: Save the patched entity.

            // return Updated(categoryEntity);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/CategoryEntities
        public IHttpActionResult Post(CategoryEntity categoryEntity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(categoryEntity);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/CategoryEntities(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<CategoryEntity> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(categoryEntity);

            // TODO: Save the patched entity.

            // return Updated(categoryEntity);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/CategoryEntities(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
