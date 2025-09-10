-- AlterTable
ALTER TABLE "Comercio" ADD COLUMN     "de_baja" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "de_baja" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "de_baja" BOOLEAN NOT NULL DEFAULT false;
