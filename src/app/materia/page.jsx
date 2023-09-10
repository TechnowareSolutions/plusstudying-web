import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import { get } from '@/actions/api';
import AddIcon from '@mui/icons-material/Add';
import CardItem from '@/components/CardItem';
import Card from '@/components/Card';
import PageItembar from '@/components/PageItembar';
import PageTitle from '@/components/PageTitle';
import Divider from '@/components/Divider';
import DataRow from '@/components/DataRow';
import PageSection from '@/components/PageSection';
import MainContainer from '@/components/MainContainer';

export default async function Page() {
  const pageMetadata = {
    title: 'materia',
  }

  let resp = await get(pageMetadata.title);
  let data = resp._embedded.entityModelList;

  return (
    <MainContainer>
      <Navbar />
      <PageSection>
        <PageTitle title={pageMetadata.title} />
        
        <PageItembar>
        <Button href={`/${pageMetadata.title}/novo`} variant="primaryCapitalized"><AddIcon/> Criar {pageMetadata.title}</Button>
        </PageItembar>

        <Divider/>

        <DataRow>
          {data.map((item) => <>
            <Card title={`${item.materia}`}>
              <CardItem label="Nível" item={item.nivel} />
              <CardItem label="Cronograma" item={`N° ${item.cronograma.id}`} />
              {/* <CardItem label="Plano" item={item.plano.nome} /> */}
            </Card>
          </>)}
        </DataRow>
      </PageSection>
    </MainContainer>
  )
}
