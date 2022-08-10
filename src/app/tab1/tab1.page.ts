import { IODS } from './../model/IODS';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController, public router: Router) {}

  exibirOBJ(obj: IODS){
    const navigationExtras: NavigationExtras = {state:{paramOBJ:obj}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  listaOBJ: IODS[] = [
    {
    nome: 'Erradicação da pobresa',
    numero: 1,
    foto: 'https://odsbrasil.gov.br/content/ods/1.png',
    pagina: '/pobre',
    descricao:'Acabar com a pobreza em todas as suas formas, em todos os lugares',
    favorito: false
  },
  {
    nome: 'Fome zero e agricultura sustentavel',
    numero: 2,
    foto: 'https://odsbrasil.gov.br/content/ods/2.png',
    pagina: '/comida',
    descricao:'Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável',
    favorito: false
  },
  {
    nome: 'Sáude e bem-estar',
    numero: 3,
    foto: 'https://odsbrasil.gov.br/content/ods/3.png',
    pagina: '/saude',
    descricao:'Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades',
    favorito: false
  },
  {
    nome: 'Educação de qualidade',
    numero: 4,
    foto: 'https://odsbrasil.gov.br/content/ods/4.png',
    pagina: '/educa',
    descricao:'Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos',
    favorito: false
  },
  {
    nome: 'Igualdade de gênero',
    numero: 5,
    foto: 'https://odsbrasil.gov.br/content/ods/5.png',
    pagina: '/genero',
    descricao:'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas',
    favorito: false
  },
  {
    nome: 'Água potável e saneamento',
    numero: 6,
    foto: 'https://odsbrasil.gov.br/content/ods/6.png',
    pagina: '/aqua',
    descricao:'Garantir disponibilidade e manejo sustentável da água e saneamento para todos',
    favorito: false
  },
  {
    nome: 'Energia limpa e acessível',
    numero: 7,
    foto: 'https://odsbrasil.gov.br/content/ods/7.png',
    pagina: '/energia',
    descricao:'Garantir acesso à energia barata, confiável, sustentável e renovável para todos',
    favorito: false
  },
  {
    nome: 'Trabalho decente e crescimento econômico',
    numero: 8,
    foto: 'https://odsbrasil.gov.br/content/ods/8.png',
    pagina: '/dinheiro',
    descricao:'Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos',
    favorito: false
  },
  {
    nome: 'indústria, inovação e infraestrutura',
    numero: 9,
    foto: 'https://odsbrasil.gov.br/content/ods/9.png',
    pagina: '/infra',
    descricao:'Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável, e fomentar a inovação',
    favorito: false
  },
  {
    nome: 'Redução das desigualdades',
    numero: 10,
    foto: 'https://odsbrasil.gov.br/content/ods/10.png',
    pagina: '/desigualdade',
    descricao:'Reduzir a desigualdade dentro dos países e entre eles',
    favorito: false
  },
  {
    nome: 'Cidades e Comunidades Sustentáveis',
    numero: 11,
    foto: 'https://odsbrasil.gov.br/content/ods/11.png',
    pagina: '/comunismo',
    descricao:'Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis',
    favorito: false
  },
  {
    nome: 'Consumo e Produção Responsáveis',
    numero: 12,
    foto: 'https://odsbrasil.gov.br/content/ods/12.png',
    pagina: '/producao',
    descricao:'Assegurar padrões de produção e de consumo sustentáveis',
    favorito: false
  },
  {
    nome: 'Ação Contra a Mudança Global do Clima',
    numero: 13,
    foto: 'https://odsbrasil.gov.br/content/ods/13.png',
    pagina: '/aquecimento',
    descricao:'Tomar medidas urgentes para combater a mudança do clima e seus impactos (reconhecendo que a Convenção Quadro das Nações Unidas sobre Mudança do Clima [UNFCCC] é o fórum internacional intergovernamental primário para negociar a resposta global à mudança do clima)',
    favorito: false
  },
  {
    nome: 'Vida na Água',
    numero: 14,
    foto: 'https://odsbrasil.gov.br/content/ods/14.png',
    pagina: '/vida-agua',
    descricao:'Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável',
    favorito: false
  },
  {
    nome: 'Vida Terrestre',
    numero: 15,
    foto: 'https://odsbrasil.gov.br/content/ods/15.png',
    pagina: '/vida-terra',
    descricao:'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade',
    favorito: false
  },
  {
    nome: 'Paz, Justiça e Instituições Eficazes',
    numero: 16,
    foto: 'https://odsbrasil.gov.br/content/ods/16.png',
    pagina: '/paz',
    descricao:'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis',
    favorito: false
  },
  {
    nome: 'Parcerias e Meios de Implementação',
    numero: 17,
    foto: 'https://odsbrasil.gov.br/content/ods/17.png',
    pagina: '/implementar',
    descricao:'Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável',
    favorito: false
  }
]

  async exibirAlertaFavorito(obj){
    const alert = await this.alertController.create({
      header: 'Favoritar',
      message: 'Você deseja favoritar essa ODS ?',
      buttons: [
        {
          text: 'Sim, Favoritar',
          handler: () => {
            this.ExibirToast('Esse filme foi favoritado','success');
            obj.favorito = true;
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            this.ExibirToast('Essa ods foi desfavoritado', 'warning');
            obj.favorito = false;
          }
        }
      ]
    });

    await alert.present();
  }

  async ExibirToast(mensagem: string, cor: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      color:cor,
      duration: 2000
    });
    toast.present();
  }
}
