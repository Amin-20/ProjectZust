﻿using AspProjectZust.Core.Abstraction;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspProjectZust.Entities.Entity
{
    public class Comment : IEntity
    {
        public int Id { get; set; }
        public int LikeCount { get; set; }
        public DateTime WriteTime { get; set; }
        public int PostId { get; set; }
        public string? Content { get; set; }
        public string? CustomIdentityUserId { get; set; }

        public virtual Post? Post { get; set; }
        public virtual CustomIdentityUser? User { get; set; }
    }
}
