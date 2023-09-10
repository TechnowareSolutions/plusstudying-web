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
    title: 'usuario',
  }

  const [error, setError] = useState("")
  const [planos, setPlanos] = useState([]);

  async function handleSubmit(formData) {

    const resp = await create(formData, pageMetadata.title)

    if (!resp.success) {
      setError(resp.message)
      return
    }

    redirect("/" + pageMetadata.title);

  }


  useEffect(() => {
    async function fetchPlanos() {
      const resp = await get('plano')
      setPlanos(resp._embedded.entityModelList)
    }
    fetchPlanos()
  }, [])


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
              label="CPF"
              id="cpf"
              name="cpf"
              type="number"
              required
            />

            <InputText
              label="email"
              id="email"
              name="email"
              required
            />

            <InputText
              label="senha"
              id="senha"
              name="senha"
              required
            />

            <InputText
              label="Data de Nascimento"
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              required
            />
            <InputSelect label="Plano" name="plano_fk" id="plano_fk">
              {planos.map((item) => {
                return <option value={item.id} key={item.id}>
                  {item.nome}
                </option>
              })}
            </InputSelect>

            <input name="statusConta" defaultValue="A" hidden/>
            <input name="dataCriacaoLogin" defaultValue={moment().format('YYYY-MM-DD')} hidden/>
            <input name="dataUltimoLogin" defaultValue={moment().format('YYYY-MM-DD')} hidden/>

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
