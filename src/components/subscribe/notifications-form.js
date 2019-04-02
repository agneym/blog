import React, { PureComponent } from 'react';
import * as S from './layout';

class NotificationsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPushEnabled: false,
      isOptedOut: true,
    };
  }
  componentDidMount() {
    this.OneSignal = window.OneSignal || [];
    this.setupOneSignal();
  }
  render() {
    const { isPushEnabled, isOptedOut } = this.state;
    return (
      <div>
        <S.SubSection>
          <S.Subtitle>Notifications</S.Subtitle>
          <sub>As it Happens.</sub>
        </S.SubSection>
        <S.SubmitBtn as="button" onClick={this.onSubscriptionBtnClick}>
          Subscribe
        </S.SubmitBtn>
      </div>
    );
  }
  onSubscriptionBtnClick = event => {
    this.getSubscriptionState().then(state => {
      if (state.isPushEnabled) {
        /* Subscribed, opt them out */
        this.OneSignal.setSubscription(false);
      } else {
        if (state.isOptedOut) {
          /* Opted out, opt them back in */
          this.OneSignal.setSubscription(true);
        } else {
          /* Unsubscribed, subscribe them */
          this.OneSignal.registerForPushNotifications();
        }
      }
    });
    event.preventDefault();
  };
  setupOneSignal = () => {
    this.OneSignal.push(() => {
      if (!this.OneSignal.isPushNotificationsSupported()) {
        return;
      }
      this.OneSignal.init({
        appId: '1a5a3a21-f5d1-4a88-a3ab-f8219fbbacea',
        notifyButton: {
          enable: false,
        },
      });
      this.updateManageWebPushSubscriptionButton();
      this.OneSignal.on('subscriptionChange', function() {
        this.updateMangeWebPushSubscriptionButton();
      });
    });
  };
  updateManageWebPushSubscriptionButton = async () => {
    try {
      const state = await this.getSubscriptionState();
      this.setState({
        isOptedOut: state.isOptedOut,
        isPushEnabled: state.isPushEnabled,
      });
    } catch (error) {
      console.error('Error getting notification status', error);
    }
  };
  async getSubscriptionState() {
    const result = await Promise.all([
      this.OneSignal.isPushNotificationsEnabled(),
      this.OneSignal.isOptedOut(),
    ]);
    const [isPushEnabled, isOptedOut] = result;
    return {
      isPushEnabled: isPushEnabled,
      isOptedOut: isOptedOut,
    };
  }
}

export default NotificationsForm;
