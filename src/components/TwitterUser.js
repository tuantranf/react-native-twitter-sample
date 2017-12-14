/**
 * ツイート
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import LightBox from 'react-native-lightbox';
import FitImage from 'react-native-fit-image';
import _ from 'lodash';
import moment from 'moment';

export default class TwitterUser extends Component {

  /*
     <TwitterUser
          profileImageUrl="https://dummyimage.com/600x400/000/fff"
          userName="ニクリーチ"
          userId="29reach"
          followersCount="999"
          friendsCount="9999"
         />
   */

  static propTypes = {
    profileImageUrl: React.PropTypes.string.isRequired,
    userName: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    followersCount: React.PropTypes.number.isRequired,
    friendsCount: React.PropTypes.number.isRequired,
  };

  render() {
    return (
      <View style={styles.userInfo}>
        <View style={styles.LeftArea}>
          <Image style={styles.userIcon}
                 source={{uri: this.props.profileImageUrl.replace('_normal', '')}}
          />
        </View>
        <View style={styles.centerArea}>
          <View style={styles.name}>
            <Text style={styles.userName}>{this.props.userName}</Text>
            <Text style={styles.userId}>@{this.props.userId}</Text>
          </View>
          <View style={styles.count}>
            <Text style={styles.countNumber}>Followers: {this.props.followersCount}</Text>
            <Text style={styles.countNumber}>Friends: {this.props.friendsCount}</Text>
          </View>
          {_.map(_.get(this.props.extendedEntities, 'media'), mediaItem => {
            return <LightBox navigator={this.props.navigator} key={mediaItem.id} style={styles.image}>
              <View>
                <FitImage
                  source={{uri: mediaItem.media_url_https + ':small'}}
                />
              </View>
            </LightBox>
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#E1E8ED',
  },
  leftArea: {
    paddingLeft: 5,
  },
  centerArea: {
    paddingLeft: 5,
  },
  rightArea: {
    flex: 1,
    paddingLeft: 5,
  },
  userIcon: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 45,
    borderColor: '#E1E8ED',
  },
  name: {
    flexDirection: 'column',
    paddingBottom: 5,
  },
  user: {
    flexDirection: 'row',
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  userId: {
    marginLeft: 5,
    color: '#657786',
    fontSize: 11,
  },
  count: {
    flexDirection: 'column',
    marginLeft: 5,
    color: '#657786',
    fontSize: 11,
  },
  countNumber: {
    marginLeft: 5,
    color: '#657786',
    fontSize: 11,
  },
  image: {
    marginTop: 5,
    borderRadius: 5,
    height: 150,
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
