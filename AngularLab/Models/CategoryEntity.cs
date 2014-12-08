using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularLab.Models
{
    public class CategoryEntity
    {
        [Key]
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

    }
}