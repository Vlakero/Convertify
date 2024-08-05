import { Component, AfterViewInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pasarela-de-pago',
  templateUrl: './pasarela-de-pago.page.html',
  styleUrls: ['./pasarela-de-pago.page.scss'],
})
export class PasarelaDePagoPage implements AfterViewInit {

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  async presentSuccessToast(subscriptionID: string) {
    const toast = await this.toastController.create({
      message: `Suscripción creada con éxito. ID: ${subscriptionID}`,
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  goToMainMenu() {
    // Redirige a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }

  ngAfterViewInit() {
    this.loadPaypalScript();
  }

  loadPaypalScript() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AcWhVZfu_KSLK2gc-uqjDRzd6SvsWLpoDplHIrngChKfYhogRS11gJ-6XeLDvTUUBdLmgl8Gl8fpe14F&vault=true&intent=subscription';
    script.onload = () => {
      console.log('PayPal SDK loaded');
      this.initializePayPalButton();
    };
    script.onerror = () => {
      console.error('PayPal SDK failed to load');
    };
    document.body.appendChild(script);
  }

  initializePayPalButton() {
    const container = document.getElementById('paypal-button-container-P-3T662053RR938364VM2YMTHA');
    if (container) {
      const paypal: any = (window as any).paypal;
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: (data: any, actions: any) => {
          return actions.subscription.create({
            plan_id: 'P-3T662053RR938364VM2YMTHA'
          });
        },
        onApprove: (data: any, actions: any) => {
          try {
            this.presentSuccessToast(data.subscriptionID); // Muestra el toast de éxito
          } catch (error) {
            console.error('Error during subscription approval:', error);
          }
        }
      }).render(container);
    } else {
      console.error('PayPal button container not found');
    }
  }
}
