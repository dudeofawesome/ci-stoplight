# CI Stoplight 🚦 [![Heroku App Status](https://heroku-badge.herokuapp.com/?app=ci-stoplight&svg=1)](https://dashboard.heroku.com/apps/ci-stoplight) [![Build Status](https://travis-ci.org/dudeofawesome/ci-stoplight.svg?branch=master)](https://travis-ci.org/dudeofawesome/ci-stoplight)

## Set up with Travis CI and LifX

1. Go to [cloud.lifx.com](cloud.lifx.com) to get a LifX bearer token for your account.
1. Get IDs for the bulbs you want to use
    1. Make a request to the LifX API
        ```bash
        curl -X GET https://api.lifx.com/v1/lights/all -H 'authorization: Bearer YOUR_BEARER_TOKEN_HERE'
        ```
    1. Copy the `id` key for each bulb
1. Put the bearer token and light IDs in to your server's environment
    ```bash
    LIFX_BEARER_TOKEN=???
    LIFX_ENTITY_IDS=["???"]
    ```
1. Add a [webhook to your Travis config](https://docs.travis-ci.com/user/notifications/#Configuring-webhook-notifications)
    ```yaml
    notifications:
      webhooks:
        urls:
          - https://YOUR_HOSTNAME/travis-ci
        on_start: always
        on_success: always
        on_failure: always
    ```
## Developing locally

`.env`

```bash
PORT=8080
HOSTNAME=localhost

LIFX_BEARER_TOKEN=???
LIFX_ENTITY_IDS=["???"]
```

