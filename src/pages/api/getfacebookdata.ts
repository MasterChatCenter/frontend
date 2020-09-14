const FB = require('fb').default;
export default async (req: any, res: any) => {
  try {
    const { token, id } = req.query;

    FB.setAccessToken(token);
    const listedPages = await FB.api(`${id}/accounts`, 'get');
    const page = listedPages.data[0];

    FB.setAccessToken(page.access_token);
    await FB.api(`${page.id}/subscribed_apps`, 'post', {
      subscribed_fields: [
        'messages',
        'messaging_postbacks',
        'messaging_optins',
      ],
    });

    res.json({
      token: page.access_token,
      id: page.id,
    });
  } catch (err) {
    res.send(err);
  }
};
