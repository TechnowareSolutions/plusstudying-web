import Navbar from '@/components/Navbar';
import PageTitle from '@/components/PageTitle';
import PageSection from '@/components/PageSection';
import MainContainer from '@/components/MainContainer';

export default function Home() {
  const pageMetadata = {
    title: 'home',
  }

  return (
    <MainContainer>
      <Navbar />
      <PageSection>
        <PageTitle title={pageMetadata.title} />
        
        <p>Bem-vindo ao Dashboard do +Studying</p>
      </PageSection>
    </MainContainer>
  )
}
