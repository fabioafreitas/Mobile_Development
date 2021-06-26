import 'package:flutter/material.dart';

class Answer extends StatelessWidget {
  final Function _function;
  final String answerText;

  Answer(this._function, this.answerText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: RaisedButton(
        color: Colors.blue,
        child: Text(answerText),
        onPressed: _function,
      ),
    );
  }
}
