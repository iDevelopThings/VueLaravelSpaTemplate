<?php

return [

    'per-page' => [
        '/list' => 20,
    ],

    /**
     * These are the "aliases" of the resources you wish to use.
     *
     * These will mainly be used in the api endpoints that are automatically
     * created, for example "/cm/user/list", "/cm/user/{id}/delete" etc
     */
    'models'   => [
        'user' => \App\ModelResources\UserModelResource::class,
    ],

];
