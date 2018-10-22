import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    private safariViewController: SafariViewController) {

  }

  share(){
    
    this.socialSharing.share(null, "This is my resume", "www/assets/file.pdf", null).then(() =>{

    }).catch((error) => {
      console.log("Error")
      console.log(error)
    })
  }

  browse(){
    this.safariViewController.show({
      url: 'http://www.pdf995.com/samples/pdf.pdf',
      tintColor: '#ff0000'
    })
    .subscribe((result: any) => {
        if(result.event === 'opened') console.log('Opened');
        else if(result.event === 'loaded') console.log('Loaded');
        else if(result.event === 'closed') console.log('Closed');
      },
      (error: any) => console.error(error)
    );

  }


  email(){
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
