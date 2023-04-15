<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {

    /**
     * user authenticate with jwt 
     * 
     * @return type
     */
    
    public function login(){
        $credentials = request(['email','password']);

        (!$token=auth()->attempt($credentials));{
        
        }
        return $this->respondWithToken($token);
        
        // $input = $request->all();
        //  if(auth()->attempt(array('email'=>$input['email'],
        //  'password'=>$input['password']))){
        //     if(auth()->user()->role_id==2){
        //         return redirect()->route('super.home');
        //     }else if(auth()->user()->role_id==1){
        //         return redirect()->route('home');
        //     }
        //  }else{
        //     return redirect()->route('login')->with('error','Invalid Credentials');
        //  }
       } 

    


    public function register(Request $request){
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'confirm_pass' => 'required|same:password'
            
        ]);

    $code = rand(100000,999999);
    $user = User::create([ 'name' => $request['name'],
    'email' => $request['email'],
    'password' => Hash::make($request['password']),
    'code' => $code,]);
    response()->json(['message' => "Success", 'user'=>$user,200]);
   
    }

    /**
     * user logout
     * 
     * @return type
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    
       /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * get token array structure
     * 
     * @param type $token
     * @return type
     */
    protected function respondWithToken($token) {
        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'expires_in' => auth()->factory()->getTTL() * 60,
                    'user' => auth()->user()


        ]);
    }

}