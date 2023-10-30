-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" VARCHAR(255) NOT NULL,
    "complemento" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(255) NOT NULL,
    "localidade" VARCHAR(255) NOT NULL,
    "uf" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_cep_key" ON "addresses"("cep");
