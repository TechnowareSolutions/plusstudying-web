"use client"

import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import * as moment from 'moment';
import { get } from "@/actions/api";
import { create } from "@/actions/api";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import DataRow from '@/components/DataRow';
import PageSection from '@/components/PageSection';
import PageTitle from '@/components/PageTitle';
import MainContainer from '@/components/MainContainer';
import InputSelect from '@/components/InputSelect';

export default function Page() {
  const pageMetadata = {
    title: 'cronograma',
  }

  const [error, setError] = useState("")
  const [select, setSelect] = useState([]);

  async function handleSubmit(formData) {

    const resp = await create(formData, pageMetadata.title)

    if (!resp.success) {
      setError(resp.message)
      return
    }

    redirect("/" + pageMetadata.title);

  }


  useEffect(() => {
    async function fetchData() {
      const resp = await get('usuario')
      setSelect(resp._embedded.entityModelList)
    }
    fetchData()
  }, [])


  return (
    <MainContainer>
      <Navbar />
      <PageSection>
        <PageTitle title={`Criar ${pageMetadata.title}`} />
        <DataRow>
          <form action={handleSubmit} className="flex flex-col gap-4">
            <InputText
              label="Porcentagem"
              id="porcentagem_number"
              name="porcentagem_number"
              type="number"
              min="1"
              max="100"
              required
            />

            <InputSelect label="Plano" name="usuario_fk" id="usuario_fk">
              {select.map((item) => {
                return <option value={item.id} key={item.id}>
                  {item.nome}
                </option>
              })}
            </InputSelect>

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
