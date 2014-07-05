<?php
App::uses('AppController', 'Controller');
/**
 * Created by PhpStorm.
 * User: LehmannH & Maschke ;)
 * Date: 25.06.14
 * Time: 13:55
 */
class ClocksController extends AppController {

    public $helpers = array('Html', 'Form', 'Js' => array('jquery-1.11.1'));
    public $components = array('RequestHandler');
    //public $layout = 'default';



    public function index() {
        //$timestamp = time();
        if ($this->request->is('post')) {
            $number = $this->request->data['Clock']['gehalt'];
            $number = $number/3600;
            var_dump($number);
           // return $this->redirect(array('action' => 'result', 'id' => $id));
        }


        if($this->request->is('post')){
            $lohn = $this->request->data['Clock']['gehalt'];



            $this->set('gehalt', $lohnps);


        }

        }
    }




