import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import TwitterUser from 'Twitter/src/components/TwitterUser'
import Twitter from 'Twitter/src/commons/Twitter'
import {twitterApp} from 'Twitter/src/config/config'

export default class extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let client = new Twitter({
      consumer_key: twitterApp.consumerKey,
      consumer_secret: twitterApp.consumerSecret,
    });

    let param = {
      screen_name: 'realDonaldTrump',
    };
    client.get('/users/show.json', param)
      .then(user => {
        console.log('user', user);
        if (user) {
          this.setState({
            user: {
              id: user.id_str,
              profileImageUrl: user.profile_image_url_https,
              userName: user.name,
              userId: user.screen_name,
              followersCount: user.followers_count,
              friendsCount: user.friends_count
            }
          });
        }
      });
  }

  render() {
    let content;
    if (this.state.user) {
      content = (
        <TwitterUser {...this.state.user} />
      );
    }

    return (
      <View style={{ marginTop: 20 }}>
        {content}
      </View>
    );
  }
}
