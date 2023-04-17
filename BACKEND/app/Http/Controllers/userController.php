<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class userController extends Controller
{
    public function users(){
   $users = User::all();
   return response()->json($users);
    }

    public function activateUser(Request $request, $id){
        $users = User::find($id);
        $users->update($request->all());
        return response()->json($users); 
    }
}
