<?php

namespace App\ModelResources;

use Illuminate\Validation\Rule;
use ScooterSam\CrudModels\ModelResource\ModelResource;

class UserModelResource extends ModelResource
{
    /**
     * The model we will use for all database communication
     *
     * @var Model
     */
    protected $model = null;

    /**
     * This is basically what you wish to call every ModelResource publicly.
     * For example, Users.php model represents a users, and we typically call this "Users" that is our title.
     *
     * @var string
     */
    protected $title = 'DummyName';

    /**
     * Which fields do we want to show on the frontend?
     *
     * @var $fields
     */
    protected $fields = ['id'];

    /**
     * Fields that are able to be searched with mysql
     *
     * @var $searchableFields
     *
     * @return null|array
     */
    protected $searchableFields = [];

    /**
     * Assign middleware to this crud model endpoint
     *
     * @var $middleware
     *
     * @return null|array
     */
    protected $middleware = [];

     /**
     * How we want to title the fields, when we do display them on the frontend
     *
     * @var $mappers
     */
    protected $mappers = ['id' => '#'];

    /**
     * Validations array that will be used when creating a resource
     *
     * @return array
     */
    public function onCreateValidations(): array
    {
        return [

        ];
    }

    /**
     * Validations that will be used when updating a resource
     *
     * @return array
     */
    public function onUpdateValidations(): array
    {
        return [

        ];
    }
}