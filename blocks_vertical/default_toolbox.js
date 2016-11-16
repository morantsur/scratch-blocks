/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">'+
  '<category name="Move" colour="#4C97FF" secondaryColour="#3373CC">'+
    '<block type="motion_turnright">'+
      '<value name="DEGREES">'+
        '<shadow type="math_number">'+
          '<field name="NUM">90</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="motion_movesteps">'+
      '<value name="STEPS">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="motion_glidesecstoxy">'+
      '<value name="SECS">'+
        '<shadow type="math_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="X">'+
        '<shadow type="math_number">'+
          '<field name="NUM">0</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="Y">'+
        '<shadow type="math_number">'+
          '<field name="NUM">0</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_wait">'+
      '<value name="DURATION">'+
        '<shadow type="math_positive_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_repeat">'+
      '<value name="TIMES">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_whenkeypressed">'+
    '</block>'+
  '</category>'+
  '<category name="talk" colour="#9966FF" secondaryColour="#774DCB">'+
    '<block type="looks_say">'+
      '<value name="MESSAGE">'+
        '<shadow type="text">'+
          '<field name="TEXT">Hello!</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="looks_thinkforsecs">'+
      '<value name="MESSAGE">'+
        '<shadow type="text">'+
          '<field name="TEXT">Hmm...</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="SECS">'+
        '<shadow type="math_number">'+
          '<field name="NUM">2</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="looks_think">'+
      '<value name="MESSAGE">'+
        '<shadow type="text">'+
          '<field name="TEXT">Hmm...</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+

    '<block type="control_wait">'+
      '<value name="DURATION">'+
        '<shadow type="math_positive_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_repeat">'+
      '<value name="TIMES">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_whenkeypressed">'+
    '</block>'+
  '</category>'+
  '<category name="change" colour="#9966FF" secondaryColour="#774DCB">'+
    '<block type="looks_switchcostumeto">'+
      '<value name="COSTUME">'+
        '<shadow type="looks_costume"></shadow>'+
      '</value>'+
    '</block>'+
    '<block type="looks_nextcostume"></block>'+
    '<block type="control_wait">'+
      '<value name="DURATION">'+
        '<shadow type="math_positive_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_repeat">'+
      '<value name="TIMES">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_whenkeypressed">'+
    '</block>'+
  '</category>'+
  '<category name="make music" colour="#D65CD6" secondaryColour="#BD42BD">'+
    '<block type="sound_play">'+
      '<value name="SOUND_MENU">'+
        '<shadow type="sound_sounds_option"></shadow>'+
      '</value>'+
    '</block>'+
    '<block type="sound_playuntildone">'+
      '<value name="SOUND_MENU">'+
        '<shadow type="sound_sounds_option"></shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_wait">'+
      '<value name="DURATION">'+
        '<shadow type="math_positive_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_repeat">'+
      '<value name="TIMES">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_whenkeypressed">'+
    '</block>'+
  '</category>'+
  '</xml>';
