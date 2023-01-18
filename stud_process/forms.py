from django.forms import ModelForm
from stud_process.models import TaskSolutions



class FormTaskSolution(ModelForm):
    class Meta:
        model = TaskSolutions
        fields = ['text']


class FormTaskSolutionWithFile(ModelForm):
    class Meta:
        model = TaskSolutions
        fields = ['text', 'file']




