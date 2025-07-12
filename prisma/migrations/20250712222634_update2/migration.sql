-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "fecha_alta" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "verificado" BOOLEAN NOT NULL DEFAULT false,
    "moderador" BOOLEAN NOT NULL DEFAULT false,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT,
    "id_region" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Comercio" (
    "id_comercio" SERIAL NOT NULL,
    "fecha_alta" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT NOT NULL,
    "id_propietario" INTEGER NOT NULL,

    CONSTRAINT "Comercio_pkey" PRIMARY KEY ("id_comercio")
);

-- CreateTable
CREATE TABLE "UsuariosComercio" (
    "id_usuario_comercio" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_comercio" INTEGER NOT NULL,

    CONSTRAINT "UsuariosComercio_pkey" PRIMARY KEY ("id_usuario_comercio")
);

-- CreateTable
CREATE TABLE "TiendaFisica" (
    "id_tienda" SERIAL NOT NULL,
    "fecha_alta" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_comercio" INTEGER NOT NULL,
    "nombre" TEXT,
    "direccion" TEXT NOT NULL,
    "id_region" INTEGER NOT NULL,

    CONSTRAINT "TiendaFisica_pkey" PRIMARY KEY ("id_tienda")
);

-- CreateTable
CREATE TABLE "HorarioAbierto" (
    "id_registro_horario" SERIAL NOT NULL,
    "id_tienda" INTEGER NOT NULL,
    "hora_apertura" TIMESTAMPTZ(6) NOT NULL,
    "hora_cierre" TIMESTAMPTZ(6) NOT NULL,
    "dia_semana" DATE,

    CONSTRAINT "HorarioAbierto_pkey" PRIMARY KEY ("id_registro_horario")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id_producto" SERIAL NOT NULL,
    "fecha_alta" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "editorial" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio_de_lista" DECIMAL NOT NULL,
    "id_propietario" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "TagGeneroProducto" (
    "id_genero_producto" SERIAL NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "TagGeneroProducto_pkey" PRIMARY KEY ("id_genero_producto")
);

-- CreateTable
CREATE TABLE "ReviewProducto" (
    "id_review" SERIAL NOT NULL,
    "fecha_posteo" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "texto_review" TEXT,
    "puntuacion" INTEGER NOT NULL,

    CONSTRAINT "ReviewProducto_pkey" PRIMARY KEY ("id_review")
);

-- CreateTable
CREATE TABLE "ReviewComercio" (
    "id_review" SERIAL NOT NULL,
    "fecha_posteo" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER NOT NULL,
    "id_comercio" INTEGER NOT NULL,
    "texto_review" TEXT,
    "puntuacion" INTEGER NOT NULL,

    CONSTRAINT "ReviewComercio_pkey" PRIMARY KEY ("id_review")
);

-- CreateTable
CREATE TABLE "UsuarioPreferencias" (
    "id_registro_preferencias" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "UsuarioPreferencias_pkey" PRIMARY KEY ("id_registro_preferencias")
);

-- CreateTable
CREATE TABLE "LogModeracionReviewProd" (
    "id_logmod_review" SERIAL NOT NULL,
    "fecha_mod" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_moderador" INTEGER NOT NULL,
    "id_review" INTEGER NOT NULL,
    "motivo_moderacion" TEXT NOT NULL,

    CONSTRAINT "LogModeracionReviewProd_pkey" PRIMARY KEY ("id_logmod_review")
);

-- CreateTable
CREATE TABLE "LogModeracionReviewCom" (
    "id_logmod_review" SERIAL NOT NULL,
    "fecha_mod" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_moderador" INTEGER NOT NULL,
    "id_review" INTEGER NOT NULL,
    "motivo_moderacion" TEXT NOT NULL,

    CONSTRAINT "LogModeracionReviewCom_pkey" PRIMARY KEY ("id_logmod_review")
);

-- CreateTable
CREATE TABLE "Region" (
    "id_region" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id_region")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_id_region_fkey" FOREIGN KEY ("id_region") REFERENCES "Region"("id_region") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comercio" ADD CONSTRAINT "Comercio_id_propietario_fkey" FOREIGN KEY ("id_propietario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UsuariosComercio" ADD CONSTRAINT "UsuariosComercio_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UsuariosComercio" ADD CONSTRAINT "UsuariosComercio_id_comercio_fkey" FOREIGN KEY ("id_comercio") REFERENCES "Comercio"("id_comercio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TiendaFisica" ADD CONSTRAINT "TiendaFisica_id_comercio_fkey" FOREIGN KEY ("id_comercio") REFERENCES "Comercio"("id_comercio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TiendaFisica" ADD CONSTRAINT "TiendaFisica_id_region_fkey" FOREIGN KEY ("id_region") REFERENCES "Region"("id_region") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "HorarioAbierto" ADD CONSTRAINT "HorarioAbierto_id_tienda_fkey" FOREIGN KEY ("id_tienda") REFERENCES "TiendaFisica"("id_tienda") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_id_propietario_fkey" FOREIGN KEY ("id_propietario") REFERENCES "Comercio"("id_comercio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TagGeneroProducto" ADD CONSTRAINT "TagGeneroProducto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReviewProducto" ADD CONSTRAINT "ReviewProducto_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReviewProducto" ADD CONSTRAINT "ReviewProducto_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReviewComercio" ADD CONSTRAINT "ReviewComercio_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ReviewComercio" ADD CONSTRAINT "ReviewComercio_id_comercio_fkey" FOREIGN KEY ("id_comercio") REFERENCES "Comercio"("id_comercio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "UsuarioPreferencias" ADD CONSTRAINT "UsuarioPreferencias_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LogModeracionReviewProd" ADD CONSTRAINT "LogModeracionReviewProd_id_moderador_fkey" FOREIGN KEY ("id_moderador") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LogModeracionReviewProd" ADD CONSTRAINT "LogModeracionReviewProd_id_review_fkey" FOREIGN KEY ("id_review") REFERENCES "ReviewProducto"("id_review") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LogModeracionReviewCom" ADD CONSTRAINT "LogModeracionReviewCom_id_moderador_fkey" FOREIGN KEY ("id_moderador") REFERENCES "Usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LogModeracionReviewCom" ADD CONSTRAINT "LogModeracionReviewCom_id_review_fkey" FOREIGN KEY ("id_review") REFERENCES "ReviewComercio"("id_review") ON DELETE NO ACTION ON UPDATE NO ACTION;
