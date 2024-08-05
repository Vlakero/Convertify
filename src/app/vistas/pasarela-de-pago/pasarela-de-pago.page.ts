import { Component, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasarela-de-pago',
  templateUrl: './pasarela-de-pago.page.html',
  styleUrls: ['./pasarela-de-pago.page.scss'],
})
export class PasarelaDePagoPage implements AfterViewInit {

  constructor(private navCtrl: NavController) { }

  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }
  

  ngAfterViewInit() {
    // Añade el script de PayPal
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AcWhVZfu_KSLK2gc-uqjDRzd6SvsWLpoDplHIrngChKfYhogRS11gJ-6XeLDvTUUBdLmgl8Gl8fpe14F&vault=true&intent=subscription';
    script.onload = () => this.initializePayPalButton();
    document.body.appendChild(script);
  }

  initializePayPalButton() {
    (window as any).paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'subscribe'
      },
      createSubscription: (data: any, actions: any) => {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-3T662053RR938364VM2YMTHA'
        });
      },
      onApprove: (data: any, actions: any) => {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
    }).render('#paypal-button-container-P-3T662053RR938364VM2YMTHA'); // Renders the PayPal button
  }
}
