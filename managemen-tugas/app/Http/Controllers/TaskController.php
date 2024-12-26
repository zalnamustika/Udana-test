<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function __construct()   
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {
        $query = Task::query();
        if($request->has('status')){
            $query->where('status', $request->input('status'));
        }
        $tasks = $query->orderBy($request->input('sort', 'created_at'), $request->input('order', 'desc'))
        ->paginate($request->input('per_page', 10));

        return response()->json($tasks);
    }

    public function show($id)
    {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }
        return response()->json($task);
    }

    public function store(Request $request)
    {
        Log::info('User terautentikasi: ' . json_encode(auth()->user()));
        $validator = Validator::make($request->all(), [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|string|in:pending,completed',
            'due_date' => 'nullable|date',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $task = Task::create($request->all());
        return response()->json($task, 201);
    }

    public function update(Request $request, $id){
        $task = Task::find($id);
        if (!$task) {       
            return response()->json(['message' => 'Task not found'], 404);
        }
        
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'status' => 'required',
            'due_date' => 'required',
        ]);
        
        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $task->update($request->all());
        return response()->json($task);
    }

    public function destroy($id){
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }
        $task->delete();
        return response()->json(['message' => 'Task deleted seccesfully']);

    }
}
