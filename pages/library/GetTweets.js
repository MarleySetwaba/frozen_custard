export const getTweets = async () => {

    //FETCH SEARCH QUERY FROM TWITTER API
    const response = await fetch(
        'https://api.twitter.com/2/tweets/search/recent?tweet.fields=attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets&expansions=author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id&user.fields=id,name,profile_image_url,protected,url,username,verified&query=frozen+custard&media.fields=duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
        {
            headers: {
                Authorization: `Bearer ${process.env.twitter_api_key}`
            }
        }
    )

    //GET RESPONSE AS JSON 
    const tweets = await response.json()

    //GET TWEET AUTHOR INFO
    const author_info = (author_id) => {
        return tweets.includes.users.find((user) => user.id === author_id)
    }

    //GET REFERENCED TWEETS
    const get_referenced_tweets = (main_tweet) => {
        return (
            main_tweet?.referenced_tweets?.map((referenced_tweet) => {
                const full_referenced_tweet = tweets.includes.tweets.find((tweet) => tweet.id === referenced_tweet.id);

                return (
                    referenced_tweet.type,
                    author_info(full_referenced_tweet.author_id),
                    {...full_referenced_tweet}
                )
            }) || []
        )
    }

    return tweets.data.reduce((all_tweets, tweet) => {
        const tweet_and_author = {
          ...tweet, 
          media: tweet?.attachments?.media_keys.map((key) => tweets.includes.media.find((media) => media.media_key === key)) || [],
          referenced_tweets: get_referenced_tweets(tweet),
          author: author_info(tweet.author_id)
        }

        return [tweet_and_author, ...all_tweets]
    }, [])
}