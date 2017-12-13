using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;




namespace lifeauthor.Models

{

    public class Journal : BaseEntity

    {
        [Key]
        public int idjournals { get; set; }
        public string contents { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
        [ForeignKey("users_id")]
        public int users_id { get; set; }
        // public User author { get; set; }

        [ForeignKey("calendar_dateId")]
        public int calendar_dateId { get; set; }
        // public Calendar calendar { get; set; }


        

    }

}