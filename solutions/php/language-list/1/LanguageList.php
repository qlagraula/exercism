<?php

function language_list(...$languages)
{
    return $languages;
}

function add_to_language_list($languages, $new_language)
{
    $new_list = $languages;
    $new_list[] = $new_language;
    return $new_list;
}

function prune_language_list($languages)
{
    return array_slice($languages, 1);
}

function current_language($languages)
{
    return $languages[0];
}

function language_list_length($languages)
{
    return count($languages);
}
