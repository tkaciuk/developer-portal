jQuery(function($) {
  'use strict';

  var $apiKey = $('#apiKey');

  /**
   * Apply user's api key
   */
  $apiKey.on('change', function() {
    var token = $apiKey[0].value;
    if(token && token.trim() != "") {
      swaggerUi.api.clientAuthorizations.add(
        'api_key', new SwaggerClient.ApiKeyAuthorization('X-Api-Key', token, 'header')
      );
    }
  });

  /**
   * Configure swagger-ui
   * @type {SwaggerUi}
   */
  var swaggerUi = new SwaggerUi({
    url: '/files/api.yaml',
    dom_id: 'swagger-ui-container',
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onFailure: function(data) {
      console.log('Unable to Load SwaggerUI', data);
    },
    docExpansion: 'none',
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showOperationIds: false
  });

  swaggerUi.load();
});
