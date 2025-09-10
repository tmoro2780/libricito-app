-- DropForeignKey
ALTER TABLE "Comercio" DROP CONSTRAINT "Comercio_id_propietario_fkey";

-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_id_propietario_fkey";

-- AddForeignKey
ALTER TABLE "Comercio" ADD CONSTRAINT "Comercio_id_propietario_fkey" FOREIGN KEY ("id_propietario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_id_propietario_fkey" FOREIGN KEY ("id_propietario") REFERENCES "Comercio"("id_comercio") ON DELETE CASCADE ON UPDATE NO ACTION;
