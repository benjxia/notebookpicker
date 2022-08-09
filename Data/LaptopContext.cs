using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using DotNetEnv;
using notebookpicker.Models;

namespace notebookpicker.Data
{
    public partial class LaptopContext : DbContext
    {
        public LaptopContext()
        {
        }

        public LaptopContext(DbContextOptions<LaptopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Img> Imgs { get; set; } = null!;
        public virtual DbSet<Laptop> Laptops { get; set; } = null!;
        public virtual DbSet<Seller> Sellers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                DotNetEnv.Env.Load(); // Necessary line or it won't connect to DB
                optionsBuilder.UseOracle(Environment.GetEnvironmentVariable("CONNSTR").ToString());
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("ADMIN")
                .UseCollation("USING_NLS_COMP");

            modelBuilder.Entity<Img>(entity =>
            {
                entity.ToTable("IMG_S");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ID");

                entity.Property(e => e.Lpid)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LPID");

                entity.Property(e => e.Src)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("SRC");

                entity.HasOne(d => d.Lp)
                    .WithMany(p => p.Imgs)
                    .HasForeignKey(d => d.Lpid)
                    .HasConstraintName("IMG_P_NBINFO_LPID_FK");
            });

            modelBuilder.Entity<Laptop>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("NBINFO_PK");

                entity.ToTable("NBINFO");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LPID");

                entity.Property(e => e.Aspratio)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ASPRATIO");

                entity.Property(e => e.Brand)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BRAND");

                entity.Property(e => e.Cpu)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CPU");

                entity.Property(e => e.Gpu)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("GPU");

                entity.Property(e => e.ImgP)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("IMG_P");

                entity.Property(e => e.Memory)
                    .HasColumnType("NUMBER(38)")
                    .HasColumnName("MEM");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.PanelType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PNTYPE");

                entity.Property(e => e.Release)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("RELEASE");

                entity.Property(e => e.Resolution)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("RESOLU");

                entity.Property(e => e.StrSize)
                    .HasColumnType("NUMBER(38)")
                    .HasColumnName("STRSIZE");

                entity.Property(e => e.StrType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("STRTYPE");

                entity.Property(e => e.Size)
                    .HasColumnType("FLOAT")
                    .HasColumnName("SZ");

                entity.Property(e => e.Weight)
                    .HasColumnType("FLOAT")
                    .HasColumnName("WEIGHT");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.ToTable("NBSELLER");

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ID");

                entity.Property(e => e.Img)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("IMG");

                entity.Property(e => e.Lpid)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("LPID");

                entity.Property(e => e.Price)
                    .HasColumnType("FLOAT")
                    .HasColumnName("PRICE");

                entity.Property(e => e.Sellername)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SELLERNAME");

                entity.Property(e => e.Url)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("URL");

                entity.HasOne(d => d.Lp)
                    .WithMany(p => p.Nbsellers)
                    .HasForeignKey(d => d.Lpid)
                    .HasConstraintName("NBSELLER_FK1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
