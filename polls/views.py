from django.db.models import F
from django.shortcuts import get_object_or_404, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from inertia import inertia, render

from .models import Choice, Question


@login_required
@inertia("Polls/Index")
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    return {"latest_question_list": latest_question_list}


@login_required
@inertia("Polls/Detail")
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return {"question": question, "choice_set": question.choice_set.all()}


@login_required
@inertia("Polls/Results")
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return {"question": question, "choice_set": question.choice_set.all()}


@login_required
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, ValueError, Choice.DoesNotExist):
        return render(
            request,
            "Polls/Detail",
            props={
                "question": question,
                "choice_set": question.choice_set.all(),
                "errors": {
                    "choice": "You didn't select a choice."
                },
            },
        )
    else:
        selected_choice.votes = F("votes") + 1
        selected_choice.save()

        return redirect(reverse("polls:results", args=(question.id,)))
