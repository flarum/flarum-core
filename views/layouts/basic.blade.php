@php
  $primaryColor = $settings->get('theme_primary_color', '#000');
  $time = time();
@endphp

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    {{-- TODO: Change below to @hasSection when Laravel is upgraded --}}
    <title>@if ($__env->hasSection('title')) @yield('title') - @endif{{ $settings->get('forum_title') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
    <link rel="stylesheet" href="/assets/forum.css?t={{$time}}">

    <style>
      input,
      button,
      select,
      textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
      }
      a {
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline;
      }
      .container {
        margin: 100px auto;
        max-width: 450px;
        padding: 0 15px;
      }
      .button {
        display: inline-block;
        padding: 15px 25px;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        border-radius: 4px;
        cursor: pointer;
        white-space: nowrap;
        font-weight: bold;
        border: 0;
      }
      .button:hover {
        text-decoration: none;
      }
      .form {
        max-width: 300px;
        margin: 0 auto;
      }
      .form .button {
        display: block;
        width: 100%;
      }
      .form-control {
        display: block;
        width: 100%;
        text-align: center;
        padding: 15px 20px;
        border-radius: 4px;
        transition: border-color .15s;
      }
      .errors {
        color: #d83e3e;
      }
      .errors ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>

  <body>
    <div class="container">
      @yield('content')
    </div>
  </body>
</html>
