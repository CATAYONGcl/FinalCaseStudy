<?php

class RegisteredUserController extends Controller {
    public function store(Request $request)
    {
        $request->validate  
        ([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $user = User::create
        ([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Optionally, log the user in after registration
        Auth::login($user);

        return redirect()->route('dashboard'); // Redirect to the dashboard or wherever you want
    }
}