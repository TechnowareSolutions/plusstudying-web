"use client"

import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import { create } from "@/actions/api";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import DataRow from '@/components/DataRow';
import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import MainContainer from '@/components/MainContainer';

export default function Page() {
  const pageMetadata = {
    title: 'plano',
  }

  const [error, setError] = useState("")

  async function handleSubmit(formData) {

    const resp = await create(formData, pageMetadata.title)

    if (!resp.success) {
      setError(resp.message)
      return
    }

    redirect("/" + pageMetadata.title);

  }

  return (
    <MainContainer>
      <Navbar />
      <PageSection>
        <PageTitle title={`Criar ${pageMetadata.title}`} />

        <DataRow>
          <form action={handleSubmit} className="flex flex-col gap-4">
            <InputText
              label="nome"
              id="nome"
              name="nome"
              required
            />
            <InputText
              label="valor"
              id="valor_number"
              name="valor_number"
              type="number"
              step="0.01"
              required
            />
            <InputText
              label="descrição"
              id="descricao"
              name="descricao"
              required
            />

            <div className="flex justify-around">
              <Button href={`/${pageMetadata.title}`} variant="secondary">
                <ChevronLeftIcon className="h-6 w-6 " />
                Cancelar
              </Button>
              <Button type="button" variant="success">
                <CheckIcon className="h-6 w-6" />
                Criar
              </Button>
            </div>

            <span className="text-red-500">{error}</span>

          </form>
        </DataRow>
      </PageSection>
    </MainContainer>
  )
}
