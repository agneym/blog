import React, { PureComponent } from 'react';
import * as S from './layout';

class NotificationsForm extends PureComponent {
  render() {
    return (
      <div>
        <S.SubSection>
          <S.Subtitle>Notifications</S.Subtitle>
          <sub>As it Happens.</sub>
        </S.SubSection>
        <S.SubmitBtn as="button">Subscribe</S.SubmitBtn>
      </div>
    );
  }
}

export default NotificationsForm;
