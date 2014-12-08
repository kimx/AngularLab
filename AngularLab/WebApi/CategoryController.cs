using AngularLab.Models;
using AngularLab.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularLab.WebApi
{
    public class CategoryController : ApiController
    {
        private static DbContextMock db = new DbContextMock();
        // GET: api/Default
        public IEnumerable<CategoryEntity> Get()
        {
            return db.Category;
        }

        // GET: api/Default/5
        public CategoryEntity Get(int id)
        {
            return db.Category.SingleOrDefault(o => o.CategoryId == id);
        }

        // POST: api/Default
        public void Post([FromBody]CategoryEntity value)
        {
          var temp =db.Category.ToList();
          temp.Add(value);
          db.Category = temp.AsQueryable();
        }

        // PUT: api/Default/5
        public void Put(int id, [FromBody]CategoryEntity value)
        {
            var find = db.Category.SingleOrDefault(o => o.CategoryId == id);
            find.CategoryName = value.CategoryName;
          
        }

        // DELETE: api/Default/5
        public void Delete(int id)
        {
            var temp = db.Category.ToList();
            temp.RemoveAll(o => o.CategoryId == id);
            db.Category = temp.AsQueryable();
        }
    }
}
