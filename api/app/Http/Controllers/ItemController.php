<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Resources\Item as ItemResource;
use App\Models\Item;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemResource::collection(Item::all());
        
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'review' => 'required',
        ]);
        $item = new Item([
            'name' => $request->name,
            'location' => $request->location,
            'review' => $request->review,
        ]);
        $item->save();
        return response()->json([
            'data' => 'Post created!'
        ]);
        
    }

    public function edit($id)
    {
        return new ItemResource(Item::findOrFail($id));
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'review' => 'required',
        ]);
        $item = Item::findOrFail($id);
        $item->name = $request->name;
        $item->location = $request->location;
        $item->review = $request->review;
        $item->save();

        return response()->json([
            'data' => 'Post updated!'
            
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::findOrFail($id);
        $item->delete();

        return response()->json([
            'data' => 'item deleted!'
        ]);

    }

}
