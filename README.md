# nova-social-share

An ultra simple button to share posts to social media (Facebook & Twitter) 🗣️

> **Note:** This package is for Nova 1.0.0, running with GraphQL.

![](https://d17oy1vhnax1f7.cloudfront.net/items/022m3U151n3G0H1Z3o2Q/Screen%20Recording%202017-01-20%20at%2009.29%20AM.gif?v=754f47a1)

## Install
Clone this repo in your Nova's `/packages` folder. 

Open the `.meteor/packages` file of your Nova app and add at the end of the **Feature packages** section:
`xavcz:nova-social-share` 

In your custom package, edit the `package.js` file and add `xavcz:nova-social-share` as a dependency, near by the other `nova:xxx` packages.

Sweet! You're now ready to use this package for your custom components!

## How to use?

Let's say you have a custom component which has access to a `post` document, given as a React prop.

```
// in the render of your custom component
<Components.SocialButton type="facebook" post={post} /> // facebook share

<Components.SocialButton type="twitter" post={post} /> // twitter share

// you can also give it your own styling if you don't like the current styles
<Components.SocialButton type="twitter" post={post} className="my-awesome-styling" />
```


## More social services? Stats on how many shares?
If you want more social services, feel free to open a pull request and add your modifications. I would be glad to add more services! 😃

As we use GraphQL now, we could easily extend the Nova schema with some fields querying Facebook / Twitter / xxx API to get insights on these posts (how many shares? how many likes? ...). If you are interested in that, open a pull request! If you don't know how to, [come by the Nova slack chatroom](http://slack.telescopeapp.org) and ping me, I'll guide you 👍
