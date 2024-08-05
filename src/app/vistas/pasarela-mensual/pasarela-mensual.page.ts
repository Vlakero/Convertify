import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasarela-mensual',
  templateUrl: './pasarela-mensual.page.html',
  styleUrls: ['./pasarela-mensual.page.scss'],
})
export class PasarelaMensualPage implements OnInit {

  constructor(private navCtrl: NavController) { }


  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }

  ngOnInit() {
    this.loadPaypalScript();
  }

  loadPaypalScript() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AcWhVZfu_KSLK2gc-uqjDRzd6SvsWLpoDplHIrngChKfYhogRS11gJ-6XeLDvTUUBdLmgl8Gl8fpe14F&vault=true&intent=subscription';
    script.onload = () => this.renderPaypalButton();
    document.body.appendChild(script);
  }

  renderPaypalButton() {
    const paypal: any = (window as any).paypal;
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'subscribe'
      },
      createSubscription: function(data: any, actions: any) {
        return actions.subscription.create({
          plan_id: 'P-4XR33822HY7736231M2YN7KY'
        });
      },
      onApprove: function(data: any, actions: any) {
        alert(data.subscriptionID); // Mensaje de éxito opcional
      }
    }).render('#paypal-button-container-P-4XR33822HY7736231M2YN7KY');
  }
}
