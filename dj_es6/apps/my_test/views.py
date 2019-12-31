from django.views.generic import TemplateView


class TestView(TemplateView):
    template_name = 'my_test/test.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context.update({
            'title': "This is a test title django app",
        })

        return context
