import React, { PropTypes } from 'react';
import { Components, registerComponent, getSetting } from 'meteor/vulcan:core';
import Posts from 'meteor/vulcan:posts';

const SocialButton = ({type, post, className}) => {

  // encode the url to share based based on the post's page
  const urlToShare = encodeURIComponent(Posts.getPageUrl(post, true));

  // by default, the fontawesome icon is the type
  let icon = type;

  let socialUrl;

  if (type === 'facebook') {

    // good ol' facebook sharer.php
    socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;

    // use fontawesome facebook-f icon
    icon += '-f';

  } else if (type === 'twitter') {

    // tweet intent: text url via @siteAccount
    socialUrl = `https://twitter.com/intent/tweet?text=${post.title}&url=${urlToShare}&via=${getSetting('twitterAccount')}`

  } else {
    // want to add a new share button? do a PR and add it above! :)
  }

  return (
    <a
      className={className ? className : `posts-social-share posts-social-share-${type}`}
      href={socialUrl}
      target="_blank"
    >
      <Components.Icon name={icon} />
    </a>
  );
};

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  className: PropTypes.string,
};

registerComponent('SocialButton', SocialButton);
